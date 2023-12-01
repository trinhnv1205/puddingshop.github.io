rm -rf release
dotnet publish mudblazorapp.csproj -c Release -o release --nologo
git add --all
git commit -m "deploy to gh-pages"
git push origin master -f