dotnet publish  BlazorApp.csproj -c Release -o release --nologo
git add --all
git commit -m "deploy to gh-pages"
git push origin task/mudblazor -f