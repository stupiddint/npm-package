# Bhashini-Translation
AI-powered language translation services for Indian languages. Easy integration and extensive language support. It's integrating with [Bhashini Api](https://bhashini.gitbook.io/bhashini-apis/). It seamlessly integrates with web frontends such as Vanilla JS, React, and Angular.  
Bhashini follows [ISO-639 series](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language codes.


# Getting Started
1. clone the project locally
2. open the project and in the terminal run
```shell 
npm i
```  
3. Rename .env.example file to .env and add userId, ulcaApiKey, AuthorizationToken
4. Signup [here](https://bhashini.gov.in/ulca/user/register) to get authentication details
    - Step 1: Fill out the registration form.
   - Step 2: Perform email authentication to enable login functionality
   - Step 3: Login using the authenticated email.
   - Step 4: Open the "My Profile" section
   - Step 5: create the API Key using Generate Button under their My Profile section. 
    [ App name should use lowercase words and underscores. ]

## How to test it  
- First get Authentication detail by registering and following above steps.
- To check npm library locally
- run : npm link  (main library folder, name of library would be same as "name": "nmt", in the package.json file)
- Go to the new project where you want to use
- run : npm link <library-name> (here npm link nmt)
- now import and use it

# Issue 
Not able to authenticate it from new project, where user will provide credentials