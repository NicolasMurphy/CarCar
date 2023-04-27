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

The sales microservice models created are used to help keep track and organize all the information regarding the sale of a vehicle. When selling a vehicle necessary information can be input for the salesperson
assigned to a particular customer. The customers information is also tracked for later use when inputting a sale in the system. The sale model uses both those models as well as the automobile model from
the Inventory microservice as foreign keys to put all that information together and complete a sale. There is a poller that is pulling info from the automobile model for new vehicles so when a new vehicle is
added it can then be used in the sales microservice when adding a sale. When a vehicle is sold the sold status is updated to sold which will then be reflected when looking at the list of automobiles.
