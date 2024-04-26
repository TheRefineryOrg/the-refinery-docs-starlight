---
title: Plausible Anylitics
---

**Website**: [plausible.io](https://plausible.io/)

**Github**: [alalytics](https://github.com/plausible/analytics)

**Community Edition**: [Plausible CE](https://plausible.io/self-hosted-web-analytics)

**CE Github**: [Plausible CE](https://github.com/plausible/community-edition/)

**Description**: Plausible is intuitive, lightweight and open source web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. Made and hosted in the EU, powered by European-owned cloud infrastructure 🇪🇺

**Features**:

1. Import GA4 stats
2. Filter stats by subdomain and block traffic from unwanted hostnames
3. More [Here](https://plausible.io/changelog)

## Installing

### Linode setup

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/T-Kzxx0aHbk?si=ggfrwsbXvsvJJ6uE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Tracking

To add the tracking to a site add a domain in the Plausible dashboard and add the embed script to the websites page.

```html
<script defer data-domain="example.com" src="https://plausible.io/js/script.js"></script>
```

> **Note**: It will only track pages that the script is linked to and wont show stats for clicks on pages without the tracker

## Example Dashboard
Here is the dashboard that you will see when logging in or viewing public stats
![alt text](/Plausible/dashboard.png)

Here is an option to share your dashboard
![alt text](/Plausible/share.png)

You can also privately share the data
![alt text](/Plausible/priv-share.png)

## API
Plausible offeres an API which data can be pulled from. The docs can be found [here](https://plausible.io/docs/stats-api).
To get an API key you can create one in you [plausible settings](https://plausible.io/settings)
