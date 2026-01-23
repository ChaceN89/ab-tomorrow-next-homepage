
# 🌱 Alberta Tomorrow Homepage

## 📘 Description
This is the homepage for **Alberta Tomorrow**, an educational initiative that introduces students and teachers to tools for exploring land use planning, environmental science, and climate awareness in Alberta. The homepage provides:

- Overview of the **Land Use Simulator**
- Access to **Teacher Resources** including lesson plans and tutorials
- References to future tools like **Energy Tomorrow** and **Wildlife Tomorrow**

<br>

## 📑 Table of Contents
- [🧰 Technologies Used](#technologies-used)
- [🏃‍♂️ Running the Project](#running-the-project)
- [🔐 Environment Variables (`.env`)](#environment-variables-env)
- [📁 Project Structure Overview](#project-structure-overview)
- [📚 API Routes](#api-routes)
- [📦 Resource Data Structure](#resource-data-structure)
  - [🧪 Example: Lesson Plan](#example-lesson-plan)
  - [🎥 Example: Video](#example-video)
- [🗂 Source Code Notes](#source-code-notes)
- [📊 Google Analytics Integration](#google-analytics-integration)
- [🛠️ Checking AWS CLI Credentials](#checking-aws-cli-credentials)
- [🚧 Future Plans](#future-plans)
- [👤 Author & Contact](#author--contact)
- [🚀 Deployment](#deployment)
- [🧱 Static Build API Setup](#static-build-api-setup)

<br>

## Technologies Used

### Core
- **Next.js** `15.2.6`
- **React** `^19.0.0`
- **Tailwind CSS`

### Libraries
- `framer-motion` – animations and transitions
- `react-ga4` – Google Analytics v4 integration
- `react-hot-toast` – lightweight toast notifications
- `react-icons` – icon library
- `react-intersection-observer` – viewport-based animations
- `react-scroll` – smooth anchor navigation
- `react-youtube` – YouTube embed support

### Analytics
- Google Analytics (GA4) is integrated.


<br>

## Running the Project

### 📦 Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Build the project for production
npm run start     # Start the production server
npx serve out  # Start the production server when next.config has "output: 'export',"
```

### 🌍 Environment Configuration

For simplicity, two environment files are used:

- `.env.development` – Used during local development
- `.env.production.local` – Used during production builds (not committed to version control)

<br>

## Environment Variables (`.env`)

``` Javascript
NEXT_PUBLIC_ENVIRONMENT=development // Only needed in development

NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-XXXXXXX
NEXT_PUBLIC_APP_VERSION=2.0.0
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

<br>

## Project Structure Overview

Grouped by functionality:

### 🌍 Pages
- `/` – Homepage  
- `/resources` – Educational resources (videos & lesson plans)
- `/contact` – Contact form & info  
- `/board-of-directors` – List of board members  
- `/faqs` – Frequently asked questions  
- `/terms-of-use` and `/privacy-policy` – Legal pages  
- `/our-partners` – Sponsors & partners  
- `/events` – Upcoming & past events  

All routing is handled via the Next.js **App Router** (`app/` directory).

<br>


## API Routes

Custom educational API endpoints:

#### Lesson Plans
- **All**: `GET /api/resources/lesson-plans`
- **Single**: `GET /api/resources/lesson-plans/:id`

#### Videos
- **All**: `GET /api/resources/videos`
- **Single**: `GET /api/resources/videos/:id`

You can access these in-browser for dev testing. Other Applications will be able to access them as well

<br>

## Resource Data Structure

### Example: Lesson Plan
`GET /api/resources/lesson-plans/glaciers-01b-intro-to-glaciers`

```json
{
  "id": "glaciers-01b-intro-to-glaciers",
  "title": "Introduction to Glaciers",
  "provider": {
    "name": "Alberta Tomorrow",
    "link": "https://www.albertatomorrow.ca"
  },
  "theme": "Glaciers/Watersheds",
  "tools": ["Land Use Simulator"],
  "description": "...",
  "grades": ["Grade 5", "Grade 7"],
  "subjects": ["Science", "Biology"],
  "learningOutcomes": [...],
  "videos": [...],
  "relatedUrls": [...]
}
```

### Example: Video
`GET /api/resources/videos/tutorial-01a-register-account`

```json
{
  "id": "tutorial-01a-register-account",
  "title": "User Tutorial: Registering for an Account",
  "tools": ["Land Use Simulator"],
  "media": {
    "url": "https://www.youtube.com/...",
    "thumbUrl": "...",
    "is360": false
  },
  "hashtags": ["account", "registration"]
}
```

<br>

## Source Code Notes

The codebase is organized under `src/`:

### Key Folders
- `app/` – All Next.js App Router pages and layouts
- `app/resources/` – Resource UI for videos and lessons
- `components/` – Reusable UI components
- `data/` – Static data files for site content (e.g., homepage, partners)
- `analytics/` – Google Analytics wrapper hooks
- `utils/` – Utility functions for metadata and filtering

### API Folder
- `app/api/resources/` – Custom API routes and static data

> All routes align with folder/file structure under `app/`.

<br>

## Checking AWS CLI Credentials

To verify which AWS credentials your CLI is using for deployment, run:

```sh
cat ~/.aws/credentials
```

This will display the credentials used by the AWS CLI on your machine.  
If you need to update or set credentials, use:

```sh
aws configure
```

This is helpful for troubleshooting deployment or ensuring you are using the correct AWS account.



## Google Analytics Integration

This project uses [Google Analytics 4 (GA4)](https://developers.google.com/analytics/devguides/collection/ga4) via the `react-ga4` library to track page views and custom events. Analytics are automatically initialized **only in production**.

---

### 🧩 How It Works

- Analytics is initialized using a custom hook: `useGoogleAnalytics.js`
- Page views are tracked automatically through `AnalyticsProvider.jsx`, using Next.js App Router (`usePathname` and `useSearchParams`)
- The provider is wrapped in `ClientLayout.jsx` and used in `app/layout.jsx`
- Custom events (like button clicks) can be triggered anywhere using `trackEvent(...)`

---

### 🔧 Environment Setup

Ensure your `.env.production.local` file includes:

```env
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_VERSION=2.0.0
NEXT_PUBLIC_ENVIRONMENT=production
```

In development, analytics are automatically disabled.

---

### 🔍 Custom Event Tracking

Use the `trackEvent` function from the `useGoogleAnalytics` hook:

```js
import useGoogleAnalytics from '@/analytics/useGoogleAnalytics';

const { trackEvent } = useGoogleAnalytics();

trackEvent('Button', 'Click', 'DonateButton', 1);
```

#### Event Fields:
- `category` – Event type (e.g., "Button")
- `action` – What the user did (e.g., "Click")
- `label` – Optional label (e.g., "DonateButton")
- `value` – Optional numerical value (e.g., 1)

---

### 📄 Files Involved

- `analytics/useGoogleAnalytics.js`  
  → Initializes GA4, provides `trackPageView`, `trackEvent`, and `setOption`.

- `analytics/AnalyticsProvider.jsx`  
  → Tracks route changes with `usePathname()` and `useSearchParams()`.

- `components/layout/ClientLayout.jsx`  
  → Wraps the app in a `<Suspense>` boundary and includes `<AnalyticsProvider>`.

<br>

## Future Plans
- Integrate **Energy Tomorrow** and **Wildlife Tomorrow**
- Improve the API and Associate it better with the current AWS API setup for the Landuse Simulator


## Author & Contact

Developed and maintained by **Chace Nielson**  
📞 Phone: `403-992-50676`  
📧 Email: [chacenielson@gmail.com](mailto:chacenielson@gmail.com)

Feel free to reach out for questions, collaboration, or feedback!

## Deployment

To build, preview, and deploy the project:

### 🔧 Local Build & Preview

```bash
npm run build     # Builds the production-ready version
npm run start     # Starts a local preview server
npx serve out     # local preview for static build (output: 'export' in next.config)
```

### 🌐 Staging (GitHub)

Push to the appropriate GitHub branch to trigger updates on the staging server (if configured via CI/CD).

### ☁️ AWS Deployment

1. Ensure your AWS credentials and region are configured correctly.
2. Create a `.env.deploy` file in the project root with the following environment variables:

```env
BUCKET_NAME=your-bucket-name
DISTRIBUTION_ID=your-cloudfront-distribution-id
```

3. Run the deploy script:

```bash
make publish
```

This will:
- Export the site
- Sync the `out/` directory to the S3 bucket
- Trigger a CloudFront cache invalidation


## Static Build API Setup

This project uses a **static export workaround** to support hosting on S3, which does not support dynamic server functions or API routes.

### 🔧 Why This Is Needed
Next.js disables all API functionality during static exports (`output: 'export'` in `next.config.js`). To work around this while preserving development flexibility, we follow these practices:

### 🛠 Current Setup

- The actual API logic lives under:
  ```
  src/app/_api/resources/
  ```
  This folder is **ignored during build** so the site can export statically without error.

- A build-time script (`export-resources`) is used to **generate static JSON files** in `public/api-static-data/`, which the frontend uses instead of real API calls:
  ```
  public/api-static-data/lesson-plans.json
  public/api-static-data/videos.json
  ```

- The project is configured for static export via:
  ```js
  // next.config.js
  export const nextConfig = {
    output: 'export'
  };
  ```

### 🚧 Development Workflow

During development, to test actual API routes:

1. Temporarily rename:
   ```
   src/app/_api → src/app/api
   ```
2. Comment out or remove `output: 'export'` from `next.config.js`
3. Run the dev server:
   ```
   npm run dev
   ```
4. Visit:
   ```
   http://localhost:3000/api/resources/lesson-plans
   ```

5. After testing, **revert**:
   - Rename `api` back to `_api`
   - Re-enable `output: 'export'`

### 🔮 Future Plans

Eventually, this site may be deployed using a framework like **AWS Amplify** or **Vercel**, which supports serverless functions. At that point:

- The `app/api` folder can be used permanently
- Static JSON exports will no longer be needed
- Other apps can access the API endpoints directly (e.g., lesson plans, video metadata)
- The routes accessed to display data in the app will need to be updated as well
