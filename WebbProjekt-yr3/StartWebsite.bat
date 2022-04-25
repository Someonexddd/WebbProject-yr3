echo on
title Intalling Files
dotnet tool install --global dotnet-ef
echo -- Dotnet EF is now installed!
dotnet ef database update --context ApplicationDbContext
echo -- Login System Created!
dotnet ef database update --context ProductDbContext
echo -- Product System Created!

echo Installation is done. Launching Website!