/**
 * Sanity CMS Schema — Estate/Property type
 *
 * This is a structural reference for when Sanity Studio is connected.
 * To use: npm install sanity next-sanity @sanity/image-url
 * Then configure sanity.config.ts with your project ID.
 */

export const estateSchema = {
  name: "estate",
  title: "Estate",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Estate Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "price",
      title: "Price (display text)",
      type: "string",
      description: 'e.g. "₦3,500,000"',
    },
    {
      name: "priceNote",
      title: "Price Note",
      type: "string",
      description: 'e.g. "per plot (600sqm)"',
    },
    {
      name: "title",
      title: "Land Title Type",
      type: "string",
      description: 'e.g. "C of O", "Gazette", "Registered Survey"',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "features",
      title: "Location Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "images",
      title: "Estate Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "paymentPlan",
      title: "Payment Plan",
      type: "object",
      fields: [
        { name: "initial", title: "Initial Deposit", type: "string" },
        { name: "spread", title: "Balance Spread", type: "string" },
        { name: "duration", title: "Duration", type: "string" },
      ],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Now Selling", value: "selling" },
          { title: "Coming Soon", value: "coming-soon" },
          { title: "Sold Out", value: "sold-out" },
        ],
      },
      initialValue: "selling",
    },
  ],
};
