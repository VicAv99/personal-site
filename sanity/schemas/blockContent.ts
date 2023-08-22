import { defineArrayMember, defineType } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineArrayMember({
      name: "code",
      title: "Code Block",
      type: "code",
      options: {
        withFilename: true,
        languageAlternatives: [
          { title: "Bash", value: "bash" },
          { title: "CSS", value: "css" },
          { title: "Docker", value: "docker" },
          { title: "Go", value: "go" },
          { title: "GraphQL", value: "graphql" },
          { title: "HTML", value: "html" },
          { title: "Java", value: "java" },
          { title: "JavaScript", value: "javascript" },
          { title: "JSON", value: "json" },
          { title: "Makefile", value: "makefile" },
          { title: "Markdown", value: "markdown" },
          { title: "OCaml", value: "ocaml" },
          { title: "PowerShell", value: "powershell" },
          { title: "Python", value: "python" },
          { title: "Ruby", value: "ruby" },
          { title: "Rust", value: "rust" },
          { title: "Shell", value: "shell" },
          { title: "SQL", value: "sql" },
          { title: "Svelte", value: "svelte" },
          { title: "TypeScript", value: "typescript" },
          { title: "Vim script", value: "vim" },
          { title: "Vue", value: "vue" },
          { title: "YAML", value: "yaml" },
        ],
      },
    }),
  ],
});
