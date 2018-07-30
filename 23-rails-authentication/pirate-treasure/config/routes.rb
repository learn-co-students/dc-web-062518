Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
    resources :treasures do
      resources :clues
    end
  end

  resources :clues, only: [:index, :show]
end
