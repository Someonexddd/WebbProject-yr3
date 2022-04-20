# WebbProject-yr3

SETUP IN VISUAL STUDIO (THIS GUIDE WAS MADE FOR VS COMMUNITY 2O19)


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

In Package Mananger Console (Tools -> NuGetPackage manager ->  package manager console and then it should open at the bottom of visual studio)
Type:
```
dotnet tool install --global dotnet-ef
```
and
```
dotnet ef database update --context ApplicationDbContext
```
and lastly
```
dotnet ef database update --context ProductDbContext
```

Step 4.

In the powershell console at the bottom. 
Type:
```
dotnet run
```
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
