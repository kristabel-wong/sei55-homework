# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_24_094354) do

  create_table "departments", force: :cascade do |t|
    t.string "title"
    t.integer "employee_count"
    t.integer "budget"
    t.integer "income"
    t.integer "productivity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.text "image_url"
    t.date "dob"
    t.string "address"
    t.string "gender"
    t.date "start_date"
    t.boolean "contract"
    t.boolean "full_time"
    t.integer "months_employed"
    t.integer "sick_days_accrued"
    t.integer "sick_days_taken"
    t.integer "leave_accrued_hours"
    t.integer "leave_taken_hours"
    t.date "end_date"
  end

end
