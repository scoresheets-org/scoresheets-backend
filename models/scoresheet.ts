export interface Scoresheet {
    'id':string
    'ctime':string
    'mtime':string
    'user':string
    'entry':string
    'session':string
    'category':number
    'subcategory': ['A','B','C','D','E','F']
    'special_ingredients_check':boolean
    'special_ingredients_comment':string
    'flight_position':number
    'flight_total':number
    'bottle_inspection_check':boolean
    'bottle_inspection_comment':string
    'aroma_score':number
    'aroma_malt':string
    'aroma_malt_inappropriate':boolean
    'aroma_malt_comment':string
    'aroma_hops':string
    'aroma_hops_inappropriate'
    'aroma_hops_comment':string
    'aroma_fermentation':string
    'aroma_fermentation_inappropriate':boolean
    'aroma_fermentation_comment':string
    'aroma_other_comment':string
    'appearance_score':number
    'appearance_color':string
    'appearance_color_inappropriate':boolean
    'appearance_color_other':string
    'appearance_clarity':string
    'appearance_clarity_inappropriate':boolean
    'appearance_head':string
    'appearance_head_inappropriate':string
    'appearance_head_other':string
    'appearance_retention':string
    'appearance_retention_inappropriate':boolean
    'appearance_other_comment':string
    'appearance_texture_comment':string
    'descriptor_acetaldehyde':boolean
    'descriptor_alcoholic':boolean
    'descriptor_astringent':boolean
    'descriptor_diacetyl':boolean
    'descriptor_dms':boolean
    'descriptor_estery':boolean
    'descriptor_grassy':boolean
    'descriptor_lightstruck':boolean
    'descriptor_metallic':boolean
    'descriptor_musty':boolean
    'descriptor_oxidized':boolean
    'descriptor_phenolic':boolean
    'descriptor_solvent':boolean
    'descriptor_sour':boolean
    'descriptor_sulfur':boolean
    'descriptor_vegetal':boolean
    'descriptor_yeasty':boolean
    'flavor_score':number
    'flavor_malt':string
    'flavor_malt_inappropriate':boolean
    'flavor_malt_comment':string
    'flavor_hops':string
    'flavor_hops_inappropriate':boolean
    'flavor_hops_comment':string
    'flavor_bitterness':string
    'flavor_bitterness_inappropriate':boolean
    'flavor_bitterness_comment':string
    'flavor_fermentation':string
    'flavor_fermentation_inappropriate':boolean
    'flavor_fermentation_comment':string
    'flavor_balance':string
    'flavor_balance_inappropriate':boolean
    'flavor_balance_comment':string
    'flavor_finish_aftertaste':string
    'flavor_finish_aftertaste_inappropriate':boolean
    'flavor_finish_aftertaste_comment':string
    'flavor_other_comment':string
    'mouthfeel_score':number
    'mouthfeel_body':string
    'mouthfeel_body_inappropriate':boolean
    'mouthfeel_carbonation':string
    'mouthfeel_carbonation_inappropriate':boolean
    'mouthfeel_warmth':string
    'mouthfeel_warmth_inappropriate'
    'mouthfeel_creaminess':string
    'mouthfeel_creaminess_inappropriate':boolean
    'mouthfeel_astringency':string
    'mouthfeel_astringency_inappropriate':boolean
    'mouthfeel_other_comment':string
    'overall_score':number
    'overall_class_example':string
    'overall_flawless':string
    'overall_wonderful':string
    'feedback_comment':string
    'scoresheet_submitted':boolean
}