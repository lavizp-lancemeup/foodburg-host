const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL;
const PORTAL_MAIN_CONTAINER_ID = 'portal-main-container';

/**
 * SEO constants
 */
const SEO_TITLE = 'FoodBourg | Delivering Happiness';
const SEO_DESCRIPTION = 'FoodBourg | Delivering Happiness';
const SEO_KEYWORDS = 'nextjs, next, react, chakra, chakra ui,';
const SEO_OG_IMAGE = `${PRODUCTION_URL}/favicon.png`;
const SEO_TWITTER_IMAGE = `${PRODUCTION_URL}/favicon.png`;
const APP_NAME = 'FoodBourg';

export {
    API_BASE_URL,
    PRODUCTION_URL,
    PORTAL_MAIN_CONTAINER_ID,
    SEO_TITLE,
    SEO_DESCRIPTION,
    SEO_KEYWORDS,
    SEO_OG_IMAGE,
    SEO_TWITTER_IMAGE,
    APP_NAME,
};
