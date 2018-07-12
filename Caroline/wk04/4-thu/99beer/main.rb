     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'



get '/' do
  erb :index
end

get '/:num_bottles' do
  @thing = params[:num_bottles].to_i
  erb :index
end



# count one down
# when you hit 0, provide a link to start over





