
%%
```dataview
LIST
FROM #Maschinen 
```
%%

%%
```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") AS Tags, join(rows.file.folder) AS Folder, join(rows.file.link, ", ") AS Files
FROM ""
WHERE file.tags
FLATTEN file.tags AS tag
GROUP BY tag
SORT length(rows.file.link) DESC
```
%%


```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") AS Tags, link(sort(rows.file.name)) AS Files
FROM #Domäne 
FLATTEN array(filter( file.etags, (t) =>
  startswith(t, "#Domäne") )) as Tags
WHERE length(Tags) > 0
GROUP BY tag
SORT length(rows.file.link) DESC
```



```dataview
TABLE map(file.etags, (t) => split(t, "/")[length(split(t, "/")) - 1]) AS tags
```
