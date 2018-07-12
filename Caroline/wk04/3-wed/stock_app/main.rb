require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote'


get '/' do
    erb(:test)
end

get '/find_stock' do
    # binding.pry
    @stock = StockQuote::Stock.quote(params[:stock_symbol])
    erb(:index) 
end

get '/about.erb' do
    erb(:about)
end
