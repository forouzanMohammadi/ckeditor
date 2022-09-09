<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access directly.
/**
 *
 * Field: gallery
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! class_exists( 'CSF_Field_gallery' ) ) {
  class CSF_Field_gallery extends CSF_Fields {

    public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
      parent::__construct( $field, $value, $unique, $where, $parent );
    }

    public function render() {

      $args = wp_parse_args( $this->field, array(
        'add_title'   => esc_html__( 'Add Gallery', 'dizzcox' ),
        'edit_title'  => esc_html__( 'Edit Gallery', 'dizzcox' ),
        'clear_title' => esc_html__( 'Clear', 'dizzcox' ),
      ) );

      $hidden = ( empty( $this->value ) ) ? ' hidden' : '';

      echo $this->field_before();

      echo '<ul>';

      if( ! empty( $this->value ) ) {

        $values = explode( ',', $this->value );

        foreach ( $values as $id ) {
          $attachment = wp_get_attachment_image_src( $id, 'thumbnail' );
          echo '<li><img src="'. $attachment[0] .'" alt="" /></li>';
        }

      }

      echo '</ul>';
      echo '<a href="#" class="button button-primary csf-button">'. $args['add_title'] .'</a>';
      echo '<a href="#" class="button csf-edit-gallery'. $hidden .'">'. $args['edit_title'] .'</a>';
      echo '<a href="#" class="button csf-warning-primary csf-clear-gallery'. $hidden .'">'. $args['clear_title'] .'</a>';
      echo '<input type="text" name="'. $this->field_name() .'" value="'. $this->value .'"'. $this->field_attributes() .'/>';

      echo $this->field_after();

    }

  }
}
