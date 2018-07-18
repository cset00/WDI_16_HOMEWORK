require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

def run_sql(sql)
  conn = PG.connect(dbname: 'movies')
  result = conn.exec(sql)
  conn.close
  return result
end

get '/' do
  erb :index
end

get '/movie/:movie_name' do
  sql = "select * from movies_list where imdbID = '#{params[:movie_name]}';"
  result_test = run_sql(sql)

  # if movie title exists in database, select it from the database. 
  if result_test.count > 0
    @result = result_test.first

  # if not, get from omdbapi
  else
    @result = HTTParty.get("http://omdbapi.com/?i=#{params[:movie_name]}&apikey=2f6435d9")
    sql2 = "INSERT INTO movies_list (movie_title, year, rating, runtime, genre, released, poster_url, plot, director, writer, actors, imdbID, classification) VALUES (
        '#{@result["Title"]}', 
        '#{@result["Year"]}', 
        '#{@result["imdbRating"]}', 
        '#{@result["Runtime"]}', 
        '#{@result["Genre"]}', 
        '#{@result["Released"]}', 
        '#{@result["Poster"]}', 
        '#{@result["Plot"].gsub("'","''")}', 
        '#{@result["Director"]}', 
        '#{@result["Writer"]}', 
        '#{@result["Actors"]}', 
        '#{@result["imdbID"]}',
        '#{@result["Rated"]}'
      );"
    run_sql(sql2)
  end

  erb :movie
end

get '/movielist' do
  @list = HTTParty.get("http://omdbapi.com/?s=#{params[:movie_title]}&apikey=2f6435d9")
  if @list["Search"].length == 1
    redirect to (URI.escape("/movie/#{params[:movie_title]}"))
  end
  erb :movielist
end

get '/about' do
  erb :about
end
