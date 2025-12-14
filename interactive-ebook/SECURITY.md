# Security Policy

## External Dependencies

This project is a static website with **no npm dependencies**. All external resources are loaded via CDN:

### CDN Resources

1. **Google Fonts** - Inter font family
   - URL: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`
   - Provider: Google
   - Purpose: Web fonts

2. **Font Awesome** - Icon library
   - URL: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css` (some pages)
   - URL: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` (main pages)
   - Provider: Cloudflare CDN (cdnjs.cloudflare.com)
   - Purpose: Icons

### Security Considerations

- All CDN resources are loaded over HTTPS
- No server-side code or npm packages are used
- No user input is processed or stored
- This is a static, read-only website

### Manual Review

Since this project uses only CDN resources (not npm packages), automated vulnerability scanning cannot detect dependencies. These external resources should be reviewed manually:

- **Google Fonts**: Trusted provider, regularly updated
- **Font Awesome**: Version 6.0.0 and 6.4.0 from Cloudflare CDN (trusted source)

### Reporting Security Issues

If you discover a security vulnerability, please report it to the project maintainer.

