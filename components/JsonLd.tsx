type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Inline JSON-LD script for structured data. Safe for SSR/static export.
 */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
