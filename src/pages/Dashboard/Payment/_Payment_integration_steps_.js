/*
1. Install stripe and react stripe js
2. Create checkout form with card element(card element contains: card number, expiration date, cvs, zip code)
3. create account on stripe and get the Publishable Key(pk)
4. get card information
5. create a payment method
6. Use test card to test payment
7. On the server side: install stripe
8. create a payment intent api with payment method types ["card"]
make sure you provide amount with cents(multiply with 100)
9. Call payment intent api to get client secret and store it in a state
10. use confirmCardPayment api with client secret card info
11. display confirm card error 
12. display confirm card success
13. Do things after payment ----> 

*/