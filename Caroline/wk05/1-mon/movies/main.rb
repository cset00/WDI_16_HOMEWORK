require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :index
end

get '/movie/:movie_title' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_title]}&apikey=2f6435d9")
  erb :movie
end

get '/movielist' do
  @list = HTTParty.get("http://omdbapi.com/?s=#{params[:movie_title]}&apikey=2f6435d9")
  if @list["Search"].length == 1
    redirect to ("/movie/#{params[:movie_title]}")
    #movie is being changed to movielist mmmmm :/
  end
  # binding.pry
  erb :movielist
end

get '/about' do
  erb :about
end




# localhost:4567/
