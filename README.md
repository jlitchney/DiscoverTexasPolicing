# DiscoverTexasPolicing.org — UX/UI Mockups

Interactive HTML mockups for the Texas Police Chiefs Association RFP:
**Design, Implementation, and Management of DiscoverTexasPolicing.org** — a
centralized, statewide law enforcement recruitment platform built in
partnership with the Texas Commission on Law Enforcement (TCOLE).

## View the mockups

Open `index.html` in a browser to see the lookbook, or jump to any
individual screen:

| # | Screen | File |
|---|--------|------|
| 01 | Homepage | [`01-homepage.html`](01-homepage.html) |
| 02 | Job search & listings | [`02-jobs.html`](02-jobs.html) |
| 03 | Texas regional map (13 regions) | [`03-regional-map.html`](03-regional-map.html) |
| 04 | Job detail | [`04-job-detail.html`](04-job-detail.html) |
| 05 | Applicant signup & pre-screening | [`05-applicant-signup.html`](05-applicant-signup.html) |
| 06 | Applicant dashboard | [`06-applicant-dashboard.html`](06-applicant-dashboard.html) |
| 07 | Agency dashboard & internal ATS | [`07-agency-dashboard.html`](07-agency-dashboard.html) |
| 08 | Post a job (standardized template) | [`08-post-a-job.html`](08-post-a-job.html) |
| 09 | TPCA admin analytics | [`09-admin-analytics.html`](09-admin-analytics.html) |
| 10 | Recruitment Ambassadors | [`10-ambassadors.html`](10-ambassadors.html) |

## Stack

- Static HTML, vanilla CSS, light vanilla JS
- No build step required — open files directly or serve over HTTP
- Texas state silhouette is a hand-projected SVG (no external map dep)
- All photos are compressed JPEGs in `assets/images/`

## Hosting on GitHub Pages

After pushing to GitHub, enable Pages in the repo:

1. Repo → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main`, folder `/ (root)`
4. Save

The site will be available at `https://<user>.github.io/DiscoverTexasPolicing/`
within a few minutes.

## Region system

These mockups use the **Texas Comptroller's 13 Uniform State Service
Regions** (High Plains, Northwest Texas, Metroplex, Upper East Texas,
Southeast Texas, Gulf Coast, Coastal Bend, Central Texas, Capital, Alamo,
South Texas Border, West Texas, Upper Rio Grande). The RFP references the
seven TCOLE field-support regions; the choice between systems should be
confirmed with TPCA before final design.

## Photo credits

Source photos appear courtesy of the user. Full-resolution originals are
gitignored; only web-optimized versions are tracked. For production use,
photo licensing should be confirmed for any non-Texas department images.

## RFP coverage

| RFP requirement | Addressed in |
|-----------------|--------------|
| Free access for all Texas agencies (§4) | 07, 08 |
| Agency dashboard & job posting tools (§4) | 07, 08 |
| Interactive regional map (§4) | 03, 01 |
| Filters by region, dept type, role, license (§4) | 02 |
| High-profile disqualifier pre-screening (§4) | 05, 08 |
| Auto-notification for disqualified applicants (§4) | 05 |
| Direct application + supplemental docs (§4) | 04, 08 |
| Optional internal ATS (§4) | 07 |
| Shared applicant pool with visibility settings (§4) | 07, 06 |
| Recruitment Ambassadors per region (§4) | 10 |
| Mobile-responsive, ADA / WCAG 2.1 AA (§5) | All screens |
| Cybersecurity & role-based access (§5) | 07, 09 |
| Brand identity — "One-Stop Shop" (§6) | All screens |
| Performance metrics & quarterly reporting (§7) | 09 |
| Data analytics dashboards (§8) | 09, 07 |
