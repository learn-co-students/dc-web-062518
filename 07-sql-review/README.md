# SQL Review

## Objectives

1.  Review basic data manipulation commands
2.  Understand joins between multiple tables
3.  Review the basic table manipulation commands
4.  Practice pragmas, distinguish pragmas from normal SQL commands
5.  Connect to SQL from Ruby

## Data manipulation commands

Create Data
Read Data
Update Data
Delete Data

## Table manipulation commands

## Pragmas and tips

```sql
.mode columns
.headers on
-- comment
```


## Challenges

### From yesterday
1.  Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists
```

2.  Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath"
```

3.  Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT)
```

4.  Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER
```

5.  Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
INSERT INTO fans (name, artist_id) VALUES ("Hillary", 169)
```

6.  Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id != 169
```

7.  Write the SQL to display an artists name next to their album title

```sql
SELECT artists.Name, albums.Title
FROM albums
INNER JOIN artists
ON artists.ArtistId = albums.ArtistId
```


### Practice and Joins

8.  Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

9.  Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql

```

10) Write the SQL to return the name of all of the artists in the 'Pop' Genre


```sql


```

11. I want to return the names of the artists and their number of rock tracks
who play Rock music
and have move than 30 tracks
in order of the number of rock tracks that they have
from greatest to least

```sql

```
