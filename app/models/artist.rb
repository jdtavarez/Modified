class Artist < ApplicationRecord

    has_one_attached :avatar

    validates :username, presence: true, uniqueness: true

    has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album

    has_many :contents,
    foreign_key: :artist_id, 
    class_name: :Content

    has_many :categories,
    through: :category, 
    source: :contents

    has_many :playlists, as: :creator

end