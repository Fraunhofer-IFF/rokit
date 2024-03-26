
```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") AS Tags
FROM #Domäne 
FLATTEN file.tags AS tag
GROUP BY tag
SORT length(rows.file.link) DESC
```