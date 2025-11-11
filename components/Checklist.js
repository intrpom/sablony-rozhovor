export class Checklist {
    constructor(items = []) {
        this.items = items;
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupCheckboxes();
        });
    }

    setupCheckboxes() {
        document.querySelectorAll('.checklist-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                this.toggleCheckbox(checkbox);
            });
        });
    }

    toggleCheckbox(checkbox) {
        checkbox.classList.toggle('checked');
        if (checkbox.classList.contains('checked')) {
            checkbox.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            checkbox.innerHTML = '';
        }
    }

    render() {
        const itemsHtml = this.items.map(item => `
            <div class="checklist-item">
                <div class="checklist-checkbox"></div>
                <span>${item}</span>
            </div>
        `).join('');

        return `
            <div class="checklist">
                ${itemsHtml}
            </div>
        `;
    }

    static render(items) {
        const checklist = new Checklist(items);
        return checklist.render();
    }
} 