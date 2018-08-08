Rails.application.routes.draw do
  
  resources :bookmarks, except: [:destroy]

  resources :users
  # go to rails/routes/info to see what routes resources generate for you.
  # remember you still need to create the Controllers. but at least you don't have to create routes


  # create
  # get '/bookmarks/new', to: 'bookmarks#new'
  # post '/bookmarks', to: 'bookmarks#create'
  
  # # read
  # get '/bookmarks', to: 'bookmarks#index'
  # get '/bookmarks/:id', to: 'bookmarks#show'

  # # update
  # get '/bookmarks/:id/edit', to: 'bookmarks#edit'
  # put '/bookmarks/:id', to: 'bookmarks#update'

  # # destroy
  # delete '/bookmarks/:id', to: 'bookmarks#destroy'
  

                  # controller name & method
  get '/about', to: 'pages#about'
  get '/', to: 'pages#home'
  get '/recent', to: 'bookmarks#recent'
  get '/archived', to: 'bookmarks#archived'
  get '/neglected', to: 'bookmarks#neglected'
  get '/track', to: 'bookmarks#track'
  put '/archivethis', to: 'bookmarks#archive'
  put '/unarchivethis', to: 'bookmarks#unarchive'
  
  
end
