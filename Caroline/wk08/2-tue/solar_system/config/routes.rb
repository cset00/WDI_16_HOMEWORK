Rails.application.routes.draw do
  # resources :planets
  
  get '/', to: 'planets#home'

  # create
  get '/planets/new', to: 'planets#new'
  post '/planets/', to: 'planets#create'

  # read
  # get '/planets', to: 'planets#index'
  get 'planets/:id', to: 'planets#show'

  # update
  get 'planets/:id/edit', to: 'planets#edit'
  put 'planets/:id', to: 'planets#update'

  # destroy
  delete 'planets/:id', to: 'planets#destroy'

end
