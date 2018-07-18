CREATE TABLE movies_list (
    id SERIAL4 PRIMARY KEY,
    movie_title VARCHAR(200),
    year VARCHAR(100),
    rating VARCHAR(100),
    runtime VARCHAR(200),
    genre TEXT NOT NULL,
    released VARCHAR(200),
    poster_url TEXT NOT NULL,
    plot TEXT NOT NULL,
    director TEXT NOT NULL,
    writer TEXT NOT NULL,
    actors TEXT NOT NULL,
    imdbID TEXT NOT NULL
);

--need to create new tables for directors, writers, directors?

CREATE TABLE directors (
    id SERIAL4 PRIMARY KEY,
    movie_id INTEGER NOT NULL,
    director_name VARCHAR(200),
    FOREIGN KEY (movie_id) REFERENCES movies_list(id) ON DELETE RESTRICT
);

CREATE TABLE writers (
    id SERIAL4 PRIMARY KEY,
    movie_id INTEGER NOT NULL,
    writer_name VARCHAR(200),
    FOREIGN KEY (movie_id) REFERENCES movies_list(id) ON DELETE RESTRICT
);

CREATE TABLE actors (
    id SERIAL4 PRIMARY KEY,
    movie_id INTEGER NOT NULL,
    actor_name VARCHAR(200),
    FOREIGN KEY (movie_id) REFERENCES movies_list(id) ON DELETE RESTRICT
);

-- to save all info from movie.erb to table movies_list
INSERT INTO movies_list (movie_title, year, rating, runtime, genre, released, poster_url, plot) VALUES ('#{@results["Title"]}', #{@result["Year"]}, '#{@result["Rated"]}', '#{@result["Runtime"]}', '#{@result["Genre"]}', #{@result["Released"]});

-- to save to table director
INSERT INTO directors ();



