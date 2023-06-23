/*
*Note: optimizing web page

Optimize Images: Compress and resize images to reduce their file size without significantly sacrificing quality. Use appropriate image formats (JPEG for photos, PNG for graphics) and consider lazy loading images to improve initial page load times.

Minify HTML, CSS, and JavaScript: Minification involves removing unnecessary characters (such as white spaces and comments) from your code to reduce its file size. Minifying your HTML, CSS, and JavaScript files can lead to faster downloads and page rendering.

Enable Compression: Enable GZIP compression on your web server to compress your web page files before sending them to the user's browser. This reduces the file size and speeds up the transfer time.

Utilize Browser Caching: Set appropriate caching headers on your web server to instruct browsers to cache certain static resources (such as images, CSS, and JavaScript files). Caching allows subsequent page loads to be faster by retrieving the resources from the local cache rather than downloading them again.

Optimize CSS Delivery: Avoid render-blocking CSS by placing critical CSS inline or in the head section of your HTML, and load non-critical CSS asynchronously or deferred. This ensures that the page content is displayed quickly, improving perceived performance.

Minimize HTTP Requests: Reduce the number of HTTP requests required to load your web page by combining and minifying CSS and JavaScript files. Also, consider using CSS sprites for small images and font icons instead of multiple individual image requests.

Use Content Delivery Networks (CDNs): CDNs store your web page files on multiple servers located across different geographical regions. When a user requests your web page, the CDN serves the files from the server closest to them, reducing latency and improving load times.

Optimize Server Response Time: Optimize your server-side code, database queries, and server configurations to minimize the time it takes for your server to respond to requests. Use caching mechanisms and performance profiling tools to identify and address any bottlenecks.

Implement Responsive Design: Ensure your web page is responsive and mobile-friendly. Responsive design allows your page to adapt to different screen sizes and devices, providing a better user experience and improving your site's search engine rankings.

Eliminate Render-Blocking JavaScript: Place JavaScript files at the bottom of your HTML code or use the async or defer attributes to prevent them from blocking the rendering of your page's content.

Optimize Web Fonts: Use web font formats that load quickly and consider font subsets to reduce file sizes. Additionally, limit the number of different fonts and font weights used on your page to minimize the impact on performance.

Monitor and Test: Regularly monitor your web page's performance using tools like Google PageSpeed Insights, GTmetrix, or WebPageTest. Test your optimizations and measure the impact on load times and user experience.



*placement of script tag 

The placement of script files in your web page can affect its loading and rendering performance. Traditionally, it was recommended to place script tags at the bottom of the HTML, just before the closing </body> tag. However, best practices have evolved, and the preferred approach now is to place scripts at the bottom of the page or use modern loading techniques. Here's an overview of both options:

Bottom of the Page (Before </body>): Placing script tags at the bottom of the page allows the browser to render the HTML and CSS content first, ensuring that users see the page's visual elements more quickly. By deferring the execution of JavaScript until the end, the initial page load time can be improved. This approach is still valid and recommended for scripts that are not critical for the initial page rendering or user interaction.

Modern Loading Techniques: Instead of placing scripts at the bottom, you can use modern loading techniques to optimize script loading and execution. Here are a few options:

        a. Asynchronous Loading: Use the async attribute in the script tag to load the script asynchronously. This allows the browser to continue parsing and rendering the HTML while the script is being fetched. However, be cautious when using async as it can lead to race conditions and unpredictable script execution order.

        b. Deferred Loading: Use the defer attribute in the script tag to load the script in the background while the HTML is being parsed. Deferred scripts are executed after the HTML parsing is complete but before the DOMContentLoaded event. This ensures that the script does not block the rendering of the page.


   !defer is typically used when you want to ensure scripts execute in the order they appear in the HTML, while still allowing the HTML parsing and rendering to proceed without interruption. On the other hand, async is useful when script order is not important, and you want scripts to load and execute as soon as possible, independently of the HTML parsing process.
   
*/
