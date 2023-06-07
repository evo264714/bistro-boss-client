/*
---------------------------
        BASIC
---------------------------        
1. Do not show the link to them who should not see it, Only show to the person/types of user who should see it
2. Do not allow to visit the link by typing on the URL.
Use AdminRoute that will check whether the user is admin or not
If not admin then redirect to any other page. You should logout user and send them to the login page as well

---------------------------
         TO SEND
---------------------------
1. Verify jwt token(send authorization token in the header to the server)
If possible use axios to send jwt token by intercepting the request
2. If it is an admin activity. Make sure only admin user is posting data by using verifyAdmin

*/