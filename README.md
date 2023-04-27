# CarCar

Team:

* Nicolas Murphy - Service
* Paul Baumann - Sales

## Design

Our application uses react and bootstrap for the front end to display our lists and forms.

## Service microservice

The original plan was to have the automobile value object in the service bounded context poll from the inventory automobile model. If the automobile vin matched the vin in an appointment, it would be marked VIP in the back-end. Instead of using the poller, I decided to create this functionality in the front-end.

The aggregate root is the appointment model, with the child models being status and technician.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
