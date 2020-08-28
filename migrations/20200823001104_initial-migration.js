exports.up = function(knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => {
        return knex
        .schema
        .createTable('Users', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.string('email').unique()
            table.string('hashedPassword')
            table.string('firstName')
            table.string('lastName')
            table.string('description')
            table.string('photo_url')
            table.string('phone')
            table.string('bjcp_id')
            table.enum('bjcp_rank', ["RECOGNIZED","CERTIFIED","NATIONAL","MASTER","GRAND_MASTER","APPRENTICE"])
            table.enum('cicerone_rank', ["SERVER","CICERONE","ADVANCED","MASTER"])
            table.string('brewery')
            table.string('industry')
            table.string('judging_years')
            table.enum('role', ["USER","CLUB_ADMIN","COMPETITION_ADMIN","MODERATOR","SUPERADMIN"]).defaultTo("USER")
            table.boolean('verified').defaultTo(false)
        })
        .createTable('Competitions', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.string('name')
            table.string('description')
            table.string('email')
            table.string('url')
            table.string('photo_url')
            table.timestamp('entry_deadline')
            table.timestamp('award_ceremony')
            table.enum('scoresheet_format', ["BJCP", "MODIFIED"]).defaultTo("BJCP")
        })
        .createTable('Entries', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.uuid('competition').references('id').inTable('Competitions')
            table.string('entry_number')
            table.string('judging_number')
            table.string('category')
            table.string('sub_category')
            table.string('allergens')
            table.string('info')
            table.string('admin_notes')
        })
        .createTable('JudgingSessions', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.timestamp('session_date').defaultTo(knex.fn.now())
            table.string('session_location')
        })
        .createTable('Scoresheets', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.uuid('user').references('id').inTable('Users')
            table.uuid('entry').references('id').inTable('Entries')
            table.uuid('session').references('id').inTable('JudgingSessions')
            table.enum('category', Array(33).fill(null).map((val,idx)=>idx+1))
            table.string('subcategory', ['A','B','C','D','E','F','G'])
            table.boolean('special_ingredients_check').defaultTo(false)
            table.string('special_ingredients_comment')
            table.integer('flight_position')
            table.integer('flight_total')
            table.boolean('bottle_inspection_check').defaultTo(false)
            table.string('bottle_inspection_comment')
            table.integer('aroma_score')
            table.string('aroma_malt')
            table.boolean('aroma_malt_inappropriate').defaultTo(false)
            table.string('aroma_malt_comment')
            table.string('aroma_hops')
            table.boolean('aroma_hops_inappropriate').defaultTo(false)
            table.string('aroma_hops_comment')
            table.string('aroma_fermentation')
            table.boolean('aroma_fermentation_inappropriate').defaultTo(false)
            table.string('aroma_fermentation_comment')
            table.string('aroma_other_comment')
            table.integer('appearance_score')
            table.string('appearance_color')
            table.boolean('appearance_color_inappropriate').defaultTo(false)
            table.string('appearance_color_other')
            table.string('appearance_clarity')
            table.boolean('appearance_clarity_inappropriate').defaultTo(false)
            table.string('appearance_head')
            table.boolean('appearance_head_inappropriate').defaultTo(false)
            table.string('appearance_head_other')
            table.string('appearance_retention')
            table.boolean('appearance_retention_inappropriate').defaultTo(false)
            table.string('appearance_other_comment')
            table.string('appearance_texture_comment')
            table.boolean('descriptor_acetaldehyde').defaultTo(false)
            table.boolean('descriptor_alcoholic').defaultTo(false)
            table.boolean('descriptor_astringent').defaultTo(false)
            table.boolean('descriptor_diacetyl').defaultTo(false)
            table.boolean('descriptor_dms').defaultTo(false)
            table.boolean('descriptor_estery').defaultTo(false)
            table.boolean('descriptor_grassy').defaultTo(false)
            table.boolean('descriptor_lightstruck').defaultTo(false)
            table.boolean('descriptor_metallic').defaultTo(false)
            table.boolean('descriptor_musty').defaultTo(false)
            table.boolean('descriptor_oxidized').defaultTo(false)
            table.boolean('descriptor_phenolic').defaultTo(false)
            table.boolean('descriptor_solvent').defaultTo(false)
            table.boolean('descriptor_sour').defaultTo(false)
            table.boolean('descriptor_sulfur').defaultTo(false)
            table.boolean('descriptor_vegetal').defaultTo(false)
            table.boolean('descriptor_yeasty').defaultTo(false)
            table.integer('flavor_score')
            table.string('flavor_malt')
            table.boolean('flavor_malt_inappropriate').defaultTo(false)
            table.string('flavor_malt_comment')
            table.string('flavor_hops')
            table.boolean('flavor_hops_inappropriate').defaultTo(false)
            table.string('flavor_hops_comment')
            table.string('flavor_bitterness')
            table.boolean('flavor_bitterness_inappropriate').defaultTo(false)
            table.string('flavor_bitterness_comment')
            table.string('flavor_fermentation')
            table.boolean('flavor_fermentation_inappropriate').defaultTo(false)
            table.string('flavor_fermentation_comment')
            table.string('flavor_balance')
            table.boolean('flavor_balance_inappropriate').defaultTo(false)
            table.string('flavor_balance_comment')
            table.string('flavor_finish_aftertaste')
            table.boolean('flavor_finish_aftertaste_inappropriate').defaultTo(false)
            table.string('flavor_finish_aftertaste_comment')
            table.string('flavor_other_comment')
            table.integer('mouthfeel_score')
            table.string('mouthfeel_body')
            table.boolean('mouthfeel_body_inappropriate').defaultTo(false)
            table.string('mouthfeel_carbonation')
            table.boolean('mouthfeel_carbonation_inappropriate').defaultTo(false)
            table.string('mouthfeel_warmth')
            table.boolean('mouthfeel_warmth_inappropriate').defaultTo(false)
            table.string('mouthfeel_creaminess')
            table.boolean('mouthfeel_creaminess_inappropriate').defaultTo(false)
            table.string('mouthfeel_astringency')
            table.boolean('mouthfeel_astringency_inappropriate').defaultTo(false)
            table.string('mouthfeel_other_comment')
            table.integer('overall_score')
            table.string('overall_class_example')
            table.string('overall_flawless')
            table.string('overall_wonderful')
            table.string('feedback_comment')
            table.boolean('scoresheet_submitted')
        })
        .createTable('CompetitionRoles', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.uuid('user').references('id').inTable('Users')
            table.uuid('competition').references('id').inTable('Competitions')
            table.enum('role', ['USER', 'JUDGE', 'HEAD_JUDGE', 'ADMIN', 'SUPERADMIN']).defaultTo('USER')
        })
        .createTable('CompetitionUserLimitations', table => {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).unique()
            table.timestamp('ctime').defaultTo(knex.fn.now())
            table.timestamp('mtime').defaultTo(knex.fn.now())
            table.uuid('user').references('id').inTable('Users')
            table.uuid('competition').references('id').inTable('Competitions')
            table.enum('category', Array(33).fill(null).map((val,idx)=>idx+1))
        })
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('CompetitionUserLimitations')
    .dropTable('CompetitionRoles')
    .dropTable('Scoresheets')
    .dropTable('JudgingSessions')
    .dropTable('Entries')
    .dropTable('Competitions')
    .dropTable('Users')
};