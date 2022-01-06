class Category < ApplicationRecord
    
    validates :genre, presence: true, uniqueness: true

end