json.id @playlist.id
json.title @playlist.title
json.description @playlist.description
json.creator_name @playlist.creator.username
json.creator_id @playlist.creator_id
json.url url_for(@playlist.image)