# WebbProject-yr3

This project requires Visual Studio Code 2019 or 2022 (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false) and NodeJS (https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi)


Step 1.

Open the folder webbproject-yr3 and the folder below with the same name. 
Double click on the .sln file (im assuming you have vs 2019 or 2022)


Step 2.

Open SQL Server Object Explorer (View -> SQL Server Object Explorer then it should open on the left side of visual studio)

Expand SQL Server

Expand (localdb)\MSSQLLocalDB..................................

Rightclick on the "Databases" folder

Click "New database"

Name it "NerDatabase" (Its case sensitive)


Step 3.

Open the sln file to open the project. And run the project with the Button and setting shown in the picture below

![](https://imgur.com/a/cjMCfZN)

<pre>





























</pre>
Theo Notes:

in packagemananger to update migration to new model : 
```
dotnet ef migrations add MyName --context MyDbContext
```
in packagemananger to update database after migration: 
```
dotnet ef database update --context MyDbContext
```
