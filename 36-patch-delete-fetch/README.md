## Fetch Patches and Deletes
- Continuing out App in Lecture together

### Goals
- Edit and Delete Pokemon Features

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To PATCH a new Pokemon (only need to include the data to be updated):
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Notes:
- `body` of a POST and PATCH fetch HAS to be a string!!

### JS Review Time?

#### Announcements:
- Keep working on Code Challenge practices

- When <some event> happens, I want to make a <what kind of> fetch and then manipulate the DOM <in what way?>
