# Refund System Project Context

## Overview

The Refund System is the second challenge from the React 2025 learning track.
The goal is to build a corporate reimbursement request application focused on
real-world frontend workflows.

The application must allow users to create, list, inspect, search, paginate, and
delete reimbursement requests. Each request must include an uploaded receipt
file, which can later be viewed from the request details page.

This challenge reinforces core React concepts and introduces patterns commonly
used in production applications, such as API consumption, async state
management, form validation, file uploads, pagination, search, modals, and user
feedback.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- BiomeJS
- Axios
- TanStack Query
- React Hook Form
- React Router
- nuqs
- Radix UI Slot
- Tailwind Variants
- Tailwind Merge
- Phosphor Icons
- Vite SVGR

## Main Objective

Build a functional refund request system that consumes the API provided by
Rocketseat and implements the complete frontend experience for corporate
reimbursement requests.

The application must support:

- Creating reimbursement requests.
- Listing reimbursement requests.
- Deleting reimbursement requests.
- Uploading a receipt file for each request.
- Paginating the reimbursement list.
- Searching requests by author name.
- Viewing a reimbursement details page.
- Displaying the uploaded receipt.
- Handling API errors and displaying feedback to the user.

## Application Features

### Home Page

The home page must list reimbursement requests in a paginated format.

It must include:

- A reimbursement list.
- Pagination controls.
- A search field to filter requests by the author name.
- A way to open the create reimbursement modal.
- Navigation to the reimbursement details page.

### Create Reimbursement Modal

The create reimbursement flow must be presented in a modal.

The form must include:

- Request name.
- Amount.
- Category.
- Receipt file.

The form must use React Hook Form with validation rules.

### Receipt Upload

Each reimbursement request must include a receipt file.

Allowed formats:

- JPG
- PNG
- PDF

Rules:

- The file must not be larger than 2 MB.
- Invalid files must be rejected with clear user feedback.
- The receipt must be sent to the API together with the reimbursement request.

### Reimbursement Details Page

The details page must display the selected reimbursement request information.

It must include:

- Request name.
- Author information.
- Amount.
- Category.
- Creation date, when available from the API.
- Uploaded receipt preview or access link.
- Delete action.

### Delete Confirmation Modal

Deleting a reimbursement request must require confirmation.

The confirmation modal must clearly ask the user whether they really want to
delete the selected reimbursement request.

After confirmation, the application must:

- Call the API delete endpoint.
- Update or invalidate the reimbursement list cache.
- Redirect the user when needed.
- Display success or error feedback.

### Success Page

After successfully creating a reimbursement request, the application must show a
success page confirming that the request was registered.

## API Integration

The application must consume the API provided by Rocketseat.

HTTP requests must be implemented with Axios.

TanStack Query must be used to manage asynchronous server state, including:

- Request loading states.
- Error states.
- Cache invalidation.
- Refetching after mutations.
- Pagination query state.
- Search query state.

The application must handle API failures and display clear messages to the user.

## Forms And Validation

Forms must be implemented with React Hook Form.

Validation must cover:

- Required fields.
- Valid amount.
- Valid category.
- Required receipt file.
- Receipt file type.
- Receipt file size limit.

Validation messages must be clear and written in English.

## Suggested Routes

- `/` - Home page with reimbursement list, search, and pagination.
- `/new-refund` - Page for creating a reimbursement request.
- `/refunds/:id` - Reimbursement details page.
- `/refunds/success` - Success page after creating a reimbursement request.

## Current Implementation Notes

The current scaffold includes:

- `QueryClientProvider` for TanStack Query.
- `NuqsAdapter` for query string state.
- React Router with `MainLayout`.
- Home and new refund routes.
- Shared button, icon button, input, and navigation components.
- Axios API helper configured from `VITE_API_URL`.
- Refund and receipt API response types.
- SVG React component imports through `vite-plugin-svgr`.

## UI Guidelines

The application is a corporate workflow tool, so the interface should be clear,
focused, and efficient.

Recommended UI direction:

- Clean layout.
- Easy-to-scan reimbursement list.
- Clear status, loading, empty, and error states.
- Accessible form fields and buttons.
- Modal flows for creation and delete confirmation.
- Responsive behavior for mobile and desktop.

## Code Quality Guidelines

- Keep components small and focused.
- Prefer reusable hooks for API queries and mutations.
- Keep API functions isolated from UI components.
- Use descriptive names in English.
- Keep user-facing text in English.
- Use Tailwind CSS utility classes consistently.
- Use BiomeJS for formatting and linting.
- Avoid unrelated abstractions until they are needed.

## Expected Learning Outcomes

This project should help practice:

- Building React applications with Vite.
- Structuring a frontend project.
- Consuming APIs with Axios.
- Managing async server state with TanStack Query.
- Building validated forms with React Hook Form.
- Handling file uploads.
- Implementing search and pagination.
- Creating modal-based workflows.
- Building details pages with dynamic routes.
- Giving users clear feedback for loading, success, and error states.
