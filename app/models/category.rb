class Category < ApplicationRecord
    
    validates :genre, presence: true, uniqueness: true

    has_many :contents, 
    foreign_key: :category_id,
    class_name: :Content

end