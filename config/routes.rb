Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] do
      resources :playlists, only: [:index]
    end

    resources :playlists, only: [:create, :show, :update, :destroy]

    resources :artists, only: [:show, :index] do
      resources :playlists, only: [:index]
      resources :albums, only: [:index]
    end

    resources :albums, only: [:show]

    resources :songs, only: [:update] do
      resources :streams, only: [:create]
    end

  end

end
