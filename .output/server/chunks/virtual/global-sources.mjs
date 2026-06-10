const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v3:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "Parsing the following collections: "
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/404",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/about",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/contact",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/disclaimer",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/privacy-policy",
                "lastmod": "2026-06-08T06:19:48.701Z"
            },
            {
                "loc": "/current-affair",
                "lastmod": "2026-06-08T06:19:48.701Z"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
