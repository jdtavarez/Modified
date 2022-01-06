class Category < ApplicationRecord

    validates :content_type, presence: true, inclusion: { in: %w(podcast music) }
    validates :genre, presence: true, uniqueness: true

end