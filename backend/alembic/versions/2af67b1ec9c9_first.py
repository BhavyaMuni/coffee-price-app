"""first

Revision ID: 2af67b1ec9c9
Revises: 
Create Date: 2022-07-29 16:36:36.615559

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2af67b1ec9c9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('coffee',
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('open', sa.Float(), nullable=True),
    sa.Column('high', sa.Float(), nullable=True),
    sa.Column('low', sa.Float(), nullable=True),
    sa.Column('close', sa.Float(), nullable=True),
    sa.Column('volume', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('date')
    )
    op.create_index(op.f('ix_coffee_date'), 'coffee', ['date'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_coffee_date'), table_name='coffee')
    op.drop_table('coffee')
    # ### end Alembic commands ###