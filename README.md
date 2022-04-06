# WebbProject-yr3

SETUP IN VISUAL STUDIO (THIS GUIDE WAS MADE FOR VS COMMUNITY 2O19)

Step 1.

Open SQL Server Object Explorer (View -> SQL Server Object Explorer then it should open on the left side of visual studio)

Expand SQL Server

Expand (localdb)\MSSQLLocalDB..................................

Rightclick on the "Databases" folder

Click "New database"

Name it "NerDatabase" (Its case sensitive)


Step 2.

In Package Mananger Console (Tools -> NuGetPackage manager ->  package manager console and then it should open at the bottom of visual studio)
Type:
```
dotnet ef database update --context ApplicationDbContext
```
and
```
dotnet ef database update --context ProductDbContext
```















Theo Notes:

in packagemananger to update migration to new model : 
```
dotnet ef migrations add MyName
```
in packagemananger to update database after migration: 
```
dotnet ef database update --context MyDbContext
```
