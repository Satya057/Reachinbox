
**Reachinbox-frontend**
**1. Implement Login Page**
Use the provided design to create a login page.

Utilize HTML, CSS, and possibly JavaScript for client-side validation.

Integrate with the provided login API.

 ![Sample Image](https://i.ibb.co/hZmK2xB/sample-image.png)


**2. Navigate to Onebox Screen After Login**

Upon successful login, redirect the user to the onebox screen (/google-login).

![Your Image Description](https://i.ibb.co/DtJdndN/your-image.png)


**3. Fetch Data in Onebox**

Use API integration to fetch data for the onebox screen.

Implement GET requests to retrieve data from the provided APIs.

Implement DELETE requests to remove data if required.

**4. Implement Custom Text Editor**

Integrate a custom text editor into your web app.

![Home Page Screenshot](https://i.ibb.co/5nHdFPf/home-page.png)
Add custom buttons such as "SAVE" and "Variables" to the editor UI.

Use JavaScript to handle button functionalities.

**5. Implement Reply Functionality**

Create a UI for composing and sending replies.
![Reply Function Screenshot](https://i.ibb.co/jVz1r5J/reply-function.png)


Upon clicking "send", utilize the provided API to send a reply.

Implement POST request to submit the reply data to the server.

**6. Implement Light and Dark Mode**

Create stylesheets for both light and dark modes.

Use CSS and possibly JavaScript to toggle between light and dark modes

Provide a UI element for users to switch between modes.

**Readme File**

Provide detailed instructions on how to run your web app.

Include any dependencies and installation steps.

Explain the features of your web app.

Describe how to use the custom text editor, reply functionality, and switch between light and dark modes.

**Additional Tips**

Test your web app thoroughly, including edge cases and different screen sizes.

Ensure proper error handling and validation.

Follow best practices for code organization and maintainability.

Utilize version control (e.g., Git) for managing your codebase.

Collaborate with backend developers if necessary to ensure smooth integration with APIs.

 

1.Implement the login page - Use the design provided

2.Once logged in the user should be taken to the onebox screen. /google-login

3.Implement fetching of data in onebox using api integration /onebox/list GET /onebox/:thread_id DELETE /onebox/:thread_id

4.Implement custom text editor (Need to Add Custom button in editor like “SAVE” and “Variables”)

5.Implement Reply - Clicking on send should send Reply POST /reply/:thread_id {from: “email”, to:”email”, “subject”: “”, “body”: “”}

6.Implement both - light and dark mode
