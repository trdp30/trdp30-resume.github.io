# Interview Responses: Most Technically Challenging Problem (Service Worker Approach)

---

## Question 1: What is the most technically challenging problem you have worked on in your frontend career, and at what scale did you solve it?

### Response

The recent most technically challenging problem was implementing a **secure file upload and asset management system** using **Service Workers** integrated with **Blocknote**, a modern block-based rich text editor, in our content management feature. While Blocknote's built-in asset handler already provided file upload functionality, it stored files as base64-encoded data directly within the editor's raw JSON content structure. This approach created significant issues: the JSON content became extremely large (especially with multiple files), making it inefficient to store, transfer, and parse, and more critically, it posed security risks by embedding file data directly in the content. I had to plan and implement a secure approach that would upload files to AWS S3, store only metadata and file references within Blocknote's JSON structure, and dynamically load assets on the consumer(candidate/evaluator) side—all while maintaining optimal editor performance, ensuring uploads continue seamlessly.

The technical solution involved a Service Worker architecture where file uploads are completely offloaded from the main thread. When a user selects a file in Blocknote, the file data is transferred to the Service Worker via the `postMessage` API using blob data, ensuring efficient memory management. The Service Worker then handles the entire upload flow: it calls our file service API to obtain a unique `file-id` and a pre-signed S3 upload URL, performs the multipart form data upload directly to AWS S3 (bypassing our backend servers entirely), and upon successful upload, makes a second API call using the `file-id` to retrieve a pre-signed S3 download URL. The Service Worker then sends a completion message back to the main thread containing both the `file-id` and download URL, which the main thread uses to update the Blocknote editor's node structure—appending the download URL to the node while storing the `file-id` in the node's metadata for future reference and consumption by the consumer(candidate/evaluator) side application.

---

## Question 2: What impact did your solution create?

### Response

The Service Worker-based file upload system created the following impact:

- **Improved application performance** - Service Worker approach freed the main thread, keeping the UI responsive during file uploads.
- **Faster editor content saving** - Reduced API request turnaround time made saving editor content quick instead of taking too long.
- **Reduced server load** - Direct S3 uploads and Service Worker processing enabled handling more concurrent operations without additional resources.
- **Reduced infrastructure costs** - Direct S3 upload approach reduced server processing and bandwidth consumption.
- **Improved editor performance** - Editor used to lag when multiple files were added, now performs smoothly.

---

## Key Technical Highlights

- **Service Worker Architecture:** Background processing for file uploads, keeping main thread responsive
- **Inter-thread Communication:** Efficient message passing using `postMessage` API with blob data
- **Background Processing:** Uploads continue even when user navigates away or closes tab
- **Direct-to-S3 Multipart Uploads:** Bypassing backend servers for improved performance
- **Blocknote JSON Structure Integration:** Storing file metadata within editor's content structure
- **Pre-signed URL Management:** Secure, time-limited access to uploaded assets
- **Reactive State Synchronization:** Ensuring Blocknote state updates correctly from Service Worker context
- **Dynamic Asset Loading:** Parsing and loading assets on consumer side

### Key Benefits

- Reduced server load through direct S3 uploads
- Improved upload success rate with error handling
- Reduced infrastructure costs
- Reduced support tickets
- Increased user file uploads
- Scalable system handling concurrent operations
- High availability during peak periods
