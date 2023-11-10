# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_08_235140) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lectures", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "web_link"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "on_cart_products", force: :cascade do |t|
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "reservation_id", default: 0, null: false
    t.bigint "user_id", default: 0, null: false
    t.index ["reservation_id"], name: "index_on_cart_products_on_reservation_id"
    t.index ["user_id"], name: "index_on_cart_products_on_user_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "color"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "category"
    t.integer "year"
    t.boolean "is_presice_year", default: true
    t.decimal "price"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "removed", default: false
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "product_id", null: false
    t.boolean "removed", default: false
    t.boolean "paid", default: false
    t.boolean "delivered", default: false
    t.index ["product_id"], name: "index_reservations_on_product_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "shipping_address"
    t.integer "phone_number1"
    t.integer "phone_number2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "on_cart_products", "reservations"
  add_foreign_key "on_cart_products", "users"
  add_foreign_key "reservations", "products"
  add_foreign_key "reservations", "users"
end
