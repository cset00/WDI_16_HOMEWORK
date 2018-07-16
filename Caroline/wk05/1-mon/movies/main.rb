require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :index
end

get '/movie' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_title]}&apikey=2f6435d9")
  erb :movie
end

get '/about' do
  erb :about
end




# localhost:4567/
