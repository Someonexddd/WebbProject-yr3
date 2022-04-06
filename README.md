# WebbProject-yr3

SETUP IN VISUAL STUDIO (THIS GUIDE WAS MADE FOR VS COMMUNITY 2O19)

Step 1. (skip of git os installed) 

Install git:
https://git-scm.com/downloads

Step 2.

Open cmd or powershell in the folder you prefer 

Type:
```
git clone https://github.com/Someonexddd/WebbProject-yr3.git
```


Step 3.

Open the folder webbproject-yr3 and the folder below with the same name. 
Double click on the .sln file (im assuming you have vs 2019 or 2022)


Step 4.

Open SQL Server Object Explorer (View -> SQL Server Object Explorer then it should open on the left side of visual studio)

Expand SQL Server

Expand (localdb)\MSSQLLocalDB..................................

Rightclick on the "Databases" folder

Click "New database"

Name it "NerDatabase" (Its case sensitive)


Step 5.

In Package Mananger Console (Tools -> NuGetPackage manager ->  package manager console and then it should open at the bottom of visual studio)
Type:
```
dotnet ef database update --context ApplicationDbContext
```
and
```
dotnet ef database update --context ProductDbContext
```

Step 6.

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
