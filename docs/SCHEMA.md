# Schema Designs
This is the design document for determining the sort of information we need to store, and the decisions that determined how we will store them.

## Database Selection
Let's evaluate the options for databases in AWS:

### Options
#### RDS [selected]
Relational database. On demand or reserved DB instances: where reserved instances are cheaper, for $8.76 a month. Inbound requests are free, and outbound requests are $0.09/GB.

#### DynamoDB
NoSQL database. Pricing seems much more complicated: perhaps it is worth it to skip evaluation simply due to that. Additionally, I have more experience with Relational databases anyways. However, we have some graph data we want to store, which might be computationally cheaper per user

#### Aurora
Relational database with multi-node storage and replication: faster, more reliable, more expensive. Aurora autoscales and autoprovisions. This sounds like overkill for what we want to do.
Storage costs $0.10/GB-month, and $0.20/1 million requests.


## Entities
### User
This represents a single person:
column | type
--- | ---
id | integer

### Birth Control Brand
This represents a specific brand of birth control
column | type
--- | ---
id | integer
name | string

### Birth Control Option
This represents a specific option for birth control (unique in name, but potentially not unique in any other way):

column | type
--- | ---
id | integer
brand | Birth Control Brand id
method | method enum

### (Birth Control) Method
This represents a specific method of birth control

column | type
--- | ---
id | integer
name | string







