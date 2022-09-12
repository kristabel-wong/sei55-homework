require 'test_helper'

class SingersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get singers_new_url
    assert_response :success
  end

  test "should get create" do
    get singers_create_url
    assert_response :success
  end

  test "should get index" do
    get singers_index_url
    assert_response :success
  end

  test "should get show" do
    get singers_show_url
    assert_response :success
  end

  test "should get edit" do
    get singers_edit_url
    assert_response :success
  end

  test "should get update" do
    get singers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get singers_destroy_url
    assert_response :success
  end

end
