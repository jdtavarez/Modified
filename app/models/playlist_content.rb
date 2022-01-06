class PlaylistContent < ApplicationRecord

    validates :position, presence: true

    belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: :Playlist

    belongs_to :songs,
    foreign_key: :album_id, 
    class_name: :Song
    
end